import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, company, phone, volume, message } = body

    if (!phone) {
      return NextResponse.json({ error: 'Телефон обязателен' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Сайт kurty-granit.kz <noreply@kurty-granit.kz>',
      to: [process.env.CONTACT_EMAIL || 'info@kurty-granit.kz'],
      subject: `Новая заявка с сайта — ${name || 'Без имени'}`,
      html: `
        <h2>Новая заявка с сайта kurty-granit.kz</h2>
        <p><strong>Имя:</strong> ${name || '—'}</p>
        <p><strong>Компания:</strong> ${company || '—'}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Объём (м²):</strong> ${volume || '—'}</p>
        <p><strong>Сообщение:</strong> ${message || '—'}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Ошибка отправки' }, { status: 500 })
  }
}
