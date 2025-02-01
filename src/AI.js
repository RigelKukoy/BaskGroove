import { HfInference } from "@huggingface/inference";

const hf = new HfInference(import.meta.env.VITE_HUGGING_FACE_API_KEY);

const SYSTEM_PROMPT = `
You are an assistant that analyzes a user's favorite songs and makes insightful observations about their overall vibe, mood, and genre preferences. Based on this analysis, you infer the user's musical taste and suggest songs they might enjoy.
Give a paragraph with 3-5 senteces of creative and fun description of the music taste based from the music provided
Recommend 10 songs in the following format:

"Title" by Artist
A short, engaging description of the song's vibe, mood, or style.

For example:
"Lava" by Still Woozy
Chill grooves and hazy vocals perfect for a relaxed mood.

"Bags" by Clairo
A mellow, nostalgic track with soft vocals and dreamy instrumentation.

- Consider elements such as genre, tempo, mood, instrumentation, and lyrical themes to describe the overall vibe.
- Infer the user's general taste and musical preferences based on the given songs.
- Provide a list of recommended songs that match their taste, ensuring variety while staying within their preferences.
- Format your response in markdown to make it easier to render to a web page.
- Keep the foreign title if the music is of different language
`;

export async function getResponsefromAI(favoriteSongs) {
  try {
    const songsString = favoriteSongs
      .map((song) => `${song.title} by ${song.artist}`)
      .join(", ");

    const response = await hf.textGeneration({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      inputs: `${SYSTEM_PROMPT}\n\nHere are my favorite songs: ${songsString}. Based on this list, what songs would you recommend for me?`,
      parameters: {
        max_new_tokens: 1024,
        temperature: 0.7,
        top_p: 0.95,
        top_k: 50,
        repetition_penalty: 1.1,
        return_full_text: false,
      },
    });

    return response.generated_text;
  } catch (err) {
    console.error(err.message);
    throw new Error("Failed to get AI response: " + err.message);
  }
}
