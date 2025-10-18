"""
Business: Отправка заявок с сайта на email производителя
Args: event - dict с httpMethod, body (name, phone, email, message)
      context - object с request_id
Returns: HTTP response dict
"""

import json
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any
from datetime import datetime

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Метод не разрешен'})
        }
    
    body_data = json.loads(event.get('body', '{}'))
    
    name = body_data.get('name', '')
    phone = body_data.get('phone', '')
    email = body_data.get('email', '')
    message = body_data.get('message', '')
    
    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Имя и телефон обязательны'})
        }
    
    smtp_host = os.environ.get('SMTP_HOST')
    smtp_port = int(os.environ.get('SMTP_PORT', '587'))
    smtp_user = os.environ.get('SMTP_USER')
    smtp_password = os.environ.get('SMTP_PASSWORD')
    recipient_email = os.environ.get('RECIPIENT_EMAIL')
    
    if not all([smtp_host, smtp_user, smtp_password, recipient_email]):
        return {
            'statusCode': 500,
            'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Email сервис не настроен'})
        }
    
    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка с сайта GreenFrame от {name}'
    msg['From'] = smtp_user
    msg['To'] = recipient_email
    
    current_time = datetime.now().strftime('%d.%m.%Y %H:%M')
    
    html_content = f"""
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #2d5a3d; border-bottom: 2px solid #2d5a3d; padding-bottom: 10px;">
            🏡 Новая заявка с сайта GreenFrame
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>👤 Имя:</strong> {name}</p>
            <p style="margin: 10px 0;"><strong>📱 Телефон:</strong> {phone}</p>
            <p style="margin: 10px 0;"><strong>📧 Email:</strong> {email if email else 'не указан'}</p>
            <p style="margin: 10px 0;"><strong>📅 Дата:</strong> {current_time}</p>
          </div>
          
          {f'<div style="background-color: #fff; padding: 15px; border-left: 4px solid #2d5a3d; margin: 20px 0;"><p style="margin: 0;"><strong>💬 Сообщение:</strong></p><p style="margin: 10px 0 0 0;">{message}</p></div>' if message else ''}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>Заявка отправлена автоматически с сайта модульных домов GreenFrame</p>
          </div>
        </div>
      </body>
    </html>
    """
    
    html_part = MIMEText(html_content, 'html', 'utf-8')
    msg.attach(html_part)
    
    try:
        with smtplib.SMTP(smtp_host, smtp_port) as server:
            server.starttls()
            server.login(smtp_user, smtp_password)
            server.send_message(msg)
        
        return {
            'statusCode': 200,
            'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
            'isBase64Encoded': False,
            'body': json.dumps({
                'success': True,
                'message': 'Заявка успешно отправлена'
            })
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
            'body': json.dumps({
                'error': f'Ошибка отправки: {str(e)}'
            })
        }
