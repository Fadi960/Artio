import React from 'react';

const Question = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 font-[rubik,sansserif] bg-[#12151e] rounded-lg shadow-md mt-8">
      <h1 className="text-2xl font-bold mb-4 text-white flex justify-center items-center ">Frequently Asked Questions</h1>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2 text-white">What is Artio?</h2>
        <p className="text-gray-400">Imagine having your own personal genie to draw anything that comes to mind, whether you’re a complete beginner or experienced artist. With Artio, there’s no need to imagine!</p>
        <p className="text-gray-400 mt-2">Previously known as DALL·E mini, Artio is the new kid on the tech block and the best AI art generator (in our community’s words!). The brainchild of our CEO, lead researcher, and AI hero, John, Artio is a free AI image generator that’s painting a new generation for the AI art revolution through our own model. Since 2022 (has it really been a year already…?) we’ve been ushering in the next era of AI image generation.</p>
        <p className="text-gray-400 mt-2">If you can dream it, Artio can draw it. Thanks to our advanced in-house-developed tech, a simple text prompt is all Artio needs to turn your imagination into AI reality – in seconds.</p>
        <p className="text-gray-400 mt-2">But this genie gives more than 3 wishes. Get 9 free images at a time within a minute or go pro for unlimited art, fewer ads, and faster generation. Let your imagination run wild!</p>
        <p className="text-gray-400 mt-2">Sushi painted by van Gogh? Your wish is our command. Gandhi as a Dragon Ball Z battle card? Granted.</p>
        <p className="text-gray-400 mt-2">Anything goes with Artio in your AI art tool box, from abstract art, aesthetic wallpapers, to breathtaking AI landscapes. Explore infinite possibilities for styles, themes, and techniques, and most importantly, have FUN exploring the boundless possibilities of AI generated images with us!</p>
        <p className="text-gray-400 mt-2">We’re constantly improving and updating our state-of-the-art technology to improve your Artio experience on the daily. We can’t wait to have you on-board to ride the AI wave with us.</p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2 text-white">How do I create AI generated Art with Artio?</h2>
        <p className="text-gray-400">If you can type, you can use Artio to turn text into AI artwork!🥳</p>
        <p className="text-gray-400 mt-2">Open Artio AI Art Generator. Type your idea (crazy concepts encouraged). Hit “DRAW” to generate your AI art!</p>
        <p className="text-gray-400 mt-2">Edit your AI image text prompt. With millions of art styles and photorealistic designs you can add, there are endless changes.</p>
        <p className="text-gray-400 mt-2">Save or download your AI art masterpiece to share with the world!</p>
        <p className="text-gray-400 mt-2">Generating free AI art truly is as easy as typing in a prompt and letting Artio do the rest.</p>
        <p className="text-gray-400 mt-2">Need help with writing the best prompts for AI art generators? We’ve got a blog for that!</p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2 text-white">Will Artio’s text-to-image AI always be free?</h2>
        <p className="text-gray-400">We hope so! Paying members also help us continue researching text to image model technology, generative AI, developing, and building new AI models to ensure your Artio experience only gets better and better. For our free AI art creators, ads help pay for our (incredibly expensive) AI models behind the scenes.</p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2 text-white">Can you make images of higher quality?</h2>
        <p className="text-gray-400">Yes, we are constantly working on improving image quality. Make sure to use the "Upscale" option when there is an image you like to get a higher resolution. Our AI gets better every single day so the quality of the images will improve over time.</p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2 text-white">Negative words? What are those?</h2>
        <p className="text-gray-400">Is there anything you definitely DON’T want to see in your AI generated art? Like an awkward hat on your drawing of Mozart painted by Van Gogh? No problem. In the “Negative Word” section, simply type out concepts you’d like Artio to avoid, like “hat”, or “crocs”. 😆</p>
        <p className="text-gray-400 mt-2">You can also influence color, light of your AI images by adding the words you do not want to the negative words.</p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2 text-white">How does prompt prediction work?</h2>
        <p className="text-gray-400">Artio and ChatGPT work in cahoots to bring you the best AI drawing prompts this side of the web.</p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2 text-white">What do I do if I get the message "too much traffic?"</h2>
        <p className="text-gray-400">If you’re struggling to generate AI art with Artio, fear not!</p>
        <p className="text-gray-400 mt-2">Try pressing the draw button again. You may need to try a few times to generate ai images.</p>
        <p className="text-gray-400 mt-2">Depending on traffic, we’re increasing our server count as quickly as we can so everyone can generate their images.</p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2 text-white">What if my images don’t appear?</h2>
        <p className="text-gray-400">We recommend trying a different browser first, or going incognito. Clearing your cache might also do the trick. If not, try restarting your phone or computer, or wait until a little later and try again.</p>
        <p className="text-gray-400 mt-2">After restarting your device and the AI generated images still don't appear, let us know through an email at team@Artio.com or let us a message on Discord and we'll look into it.</p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2 text-white">How does the AI model work?</h2>
        <p className="text-gray-400">The model learns concepts from images. Each time you enter a prompt, it will create unique images based on its current knowledge and will try to combine the concepts from your prompt in a creative way. You can find more details of an earlier model in our W&B Project Report or the DALL·E mini model card.</p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2 text-white">Are there biases or limitations in AI generated art?</h2>
        <p className="text-gray-400">Yes, seeing as it learns through existing images, it is exposed to societal prejudices and harmful stereotypes so can integrate these into its images. Limitations and bias in AI are still being researched and we're working actively on this subject. You can learn more in the DALL·E mini model card.</p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2 text-white">Can I use the images generated through Artio?</h2>
        <p className="text-gray-400">Yes, as long as you respect the Terms of Use, feel free to use them as you wish for personal, academic or commercial use!</p>
        <p className="text-gray-400 mt-2">Please credit Artio.com for the images if you are a free subscriber.</p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2 text-white">Is there a Artio app?</h2>
        <p className="text-gray-400">Not at the moment but we plan to develop one in the future.</p>
        <p className="text-gray-400 mt-2">⚠️ WARNING: If you find a Artio AI drawing generator app on Google Play or the App Store, it’s not us! There are more copycats out there than we can count, but the real Artio doesn’t have an app just yet. If we do, you’ll be the first to know!</p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2 text-white">What happened to the old model?</h2>
        <p className="text-gray-400">For the nostalgic, you can access 🥑 DALL-E mega on 🤗 Hugging Face Spaces.</p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2 text-white">Artio rocks! How can I show my support?</h2>
        <p className="text-gray-400">Yes it does! Your feedback is gold to us. From bugs to feature requests, we’re all ears, always.</p>
        <p className="text-gray-400 mt-2">Loving Artio? Get more from our AI picture generator by upgrading to a paid plan.</p>
        <p className="text-gray-400 mt-2">You can also Get Some Swag by turning your favorite AI creations into a t-shirt!</p>
        <p className="text-gray-400 mt-2">Your support means we can keep making our AI model better for you every single day!</p>
      </div>
    </div>
  );
};

export default Question;
