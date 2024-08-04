import React from 'react';

const BlogCard = ({ imageSrc, author, title, description }) => {
  return (
    <div className="bg-[#1e2028] rounded-lg overflow-hidden w-full max-w-[350px]">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-[#8b8b8b] text-sm mb-2">By {author}</p>
        <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
        <p className="text-[#8b8b8b] text-sm mb-4">{description}</p>
        <a href="#" className="text-white text-sm">Read more →</a>
      </div>
    </div>
  );
};

const BlogCardRow = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around gap-6">
      <BlogCard 
        imageSrc="src/images/field.png"
        author="Hugo"
        title="Animate your Artio images in 2 min"
        description="Learn how to make cute animations with your Craiyon characters!"
      />
      <BlogCard 
        imageSrc="src/images/witch.png"
        author="Melissa"
        title="How to Write the Best Prompts for AI art generators"
        description="Learn the basics for writing effective prompts to use with AI text to image generators and create stunning art and images."
      />
      <BlogCard 
        imageSrc="src/images/panda.png"
        author="John"
        title="How to Write the Best Prompts for AI art generators"
        description="Learn the basics for writing effective prompts to use with AI text to image generators and create stunning art and images."
      />
    </div>
  );
};

export default BlogCardRow;
