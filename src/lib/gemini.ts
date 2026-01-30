import { GoogleGenerativeAI } from "@google/generative-ai";

export const sendMessageToGemini = async (
  message: string
): Promise<string> => {
  try {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    if (!apiKey) {
      throw new Error("Missing Gemini API Key");
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash", // ✅ Works with latest SDK (v1 API)
    });

    const result = await model.generateContent(message);
    return result.response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "⚠️ AI service is temporarily unavailable. Please try again.";
  }
};
