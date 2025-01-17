# Alt Sprout

Alt Sprout is an AI-driven alt text generator that leverages OpenAI technologies to create meaningful and accessible descriptions for images. Built with scalability, performance, and accessibility in mind, Alt Sprout integrates advanced AI models with modern web development tools.

---

## Key Features

- **AI-Powered Alt Text**: Automatically generates rich, meaningful alt text for images based on user context.
- **Modular Middleware**: Streamlined backend using Express to ensure collaboration and maintainability.
- **Dynamic UI Management**: Intuitive and responsive user interface built with React.
- **Fast Development Environment**: Vite enables rapid setup and efficient development workflows.

---

## Tech Stack

### **Vite**

Vite was chosen for its fast setup time and simplicity, enabling us to:

- Quickly establish a robust development environment.
- Focus on complex challenges like AI model fine-tuning and full-stack integration without getting bogged down by configuration.
- Maintain performance and flexibility throughout development.

### **Express**

Express was used to:

- Handle routing for POST requests, processing user input to generate alt text.
- Divide middleware into modular, distinct processes, allowing team members to work collaboratively without conflicts.
- Keep backend functionality clear and maintainable.

### **React**

React powers our front-end, offering:

- Efficient state management for user input and content toggling.
- Clear separation of UI components, allowing concurrent development with minimal merge conflicts.
- A flexible, scalable ecosystem for future enhancements.

### **OpenAI**

OpenAI’s `gpt-4o-mini` model was integral to generating meaningful alt text by:

- Processing images via URLs and using minimal prompts to create natural language descriptions.
- Incorporating optional user-provided context for rich, tailored alt text.

While we initially considered Azure Computer Vision, its tag-based approach was less suited for our natural language needs. OpenAI provided a better fit for generating accessible and descriptive alt text.

Example prompt structure:

```json
model: 'gpt-4o-mini',
temperature: 0.7,
messages: [
  {
    role: 'user',
    content: [
      { type: 'text', text: "What’s in this image?" },
      {
        type: 'image_url',
        image_url: {
          url: userUrl,
          detail: 'low',
        },
      },
    ],
  },
]
```

---

## How It Works

1. **User Uploads an Image**: Input the image URL and optional context.
2. **AI Processes the Image**: The backend leverages OpenAI to generate alt text.
3. **Alt Text Delivered**: The generated alt text is returned to the user for integration into their content.

---

## Future Plans

- Expand AI model options for greater flexibility.
- Integrate additional natural language processing features.
- Enhance UI/UX for a more intuitive user experience.
- Explore additional image processing frameworks.

---

## Contributions

We welcome contributions! Please submit pull requests or issues to help improve Alt Sprout.

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

## Acknowledgments

- **Vite** for its unparalleled development speed and flexibility.
- **Express** for modular and maintainable backend routing.
- **React** for a seamless and scalable front-end experience.
- **OpenAI** for its powerful language model and natural language processing capabilities.
