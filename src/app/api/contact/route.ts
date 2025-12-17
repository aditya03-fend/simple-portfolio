import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("BODY:", body);

    const { name, email, message } = body;

    console.log("ENV:", {
      token: process.env.TELEGRAM_BOT_TOKEN,
      chatId: process.env.TELEGRAM_CHAT_ID,
    });

    const telegramUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

    const telegramRes = await fetch(telegramUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: `
📩 New Contact Message

Name: ${name}
Email: ${email}
Message:
${message}
        `,
      }),
    });

    const telegramData = await telegramRes.json();
    console.log("TELEGRAM RESPONSE:", telegramData);

    if (!telegramRes.ok) {
      throw new Error("Telegram API failed");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API ERROR:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
