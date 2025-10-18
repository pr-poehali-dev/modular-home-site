"""
Business: Отправка заявок с сайта в Telegram бот (обновлено)
Args: event - dict с httpMethod, body (name, phone, email, message)
      context - object с request_id
Returns: HTTP response dict
"""

import json
import os
import urllib.request
import urllib.parse
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
    
    bot_token = os.environ.get('TELEGRAM_BOT_TOKEN')
    chat_id = os.environ.get('TELEGRAM_CHAT_ID')
    
    if not bot_token or not chat_id:
        return {
            'statusCode': 500,
            'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Telegram бот не настроен. Добавьте TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID'})
        }
    
    current_time = datetime.now().strftime('%d.%m.%Y %H:%M')
    
    telegram_message = f"""🏡 <b>Новая заявка с сайта GreenFrame</b>

👤 <b>Имя:</b> {name}
📱 <b>Телефон:</b> {phone}
📧 <b>Email:</b> {email if email else 'не указан'}
📅 <b>Дата:</b> {current_time}"""
    
    if message:
        telegram_message += f"\n\n💬 <b>Сообщение:</b>\n{message}"
    
    url = f'https://api.telegram.org/bot{bot_token}/sendMessage'
    data = {
        'chat_id': chat_id,
        'text': telegram_message,
        'parse_mode': 'HTML'
    }
    
    try:
        req_data = urllib.parse.urlencode(data).encode('utf-8')
        req = urllib.request.Request(url, data=req_data)
        with urllib.request.urlopen(req) as response:
            response.read()
        
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
                'error': f'Ошибка отправки в Telegram: {str(e)}'
            })
        }