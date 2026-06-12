import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.css'
})
export class Chatbot implements OnInit {
  isOpen = false;
  messages: ChatMessage[] = [];
  inputMessage = '';
  isLoading = false;

  private botResponses = [
    "Thanks for reaching out! I'm Jagdish's AI assistant. How can I help you today?",
    "I'd be happy to help! Are you interested in Angular, Agentic AI, or something else?",
    "That's a great question! Feel free to ask me about Jagdish's experience, skills, or projects.",
    "I'm here to help! You can ask me about Angular development, enterprise architecture, or connect with Jagdish directly.",
    "Sounds interesting! Would you like to know more about any specific project or technology?",
    "Great! I can help you with information about Angular best practices, cloud architecture, or frontend development.",
    "Feel free to reach out directly if you'd like to discuss a project or collaboration opportunity!"
  ];

  ngOnInit(): void {
    this.addBotMessage("Hi there! 👋 I'm Jagdish's AI assistant. How can I help you today?");
  }

  toggleChat(): void {
    this.isOpen = !this.isOpen;
  }

  sendMessage(): void {
    if (!this.inputMessage.trim()) return;

    this.addUserMessage(this.inputMessage);
    this.inputMessage = '';
    this.isLoading = true;

    setTimeout(() => {
      const randomResponse = this.botResponses[
        Math.floor(Math.random() * this.botResponses.length)
      ];
      this.addBotMessage(randomResponse);
      this.isLoading = false;
    }, 800);
  }

  private addUserMessage(text: string): void {
    this.messages.push({
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    });
    this.scrollToBottom();
  }

  private addBotMessage(text: string): void {
    this.messages.push({
      id: Date.now().toString(),
      text,
      sender: 'bot',
      timestamp: new Date()
    });
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    setTimeout(() => {
      const chatMessages = document.querySelector('.chat-messages');
      if (chatMessages) {
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }
    }, 0);
  }

  handleKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }
}
