import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'React-based платформа с интеграцией платежей',
      tech: ['React', 'TypeScript', 'Stripe'],
      icon: 'ShoppingCart'
    },
    {
      title: 'Dashboard Analytics',
      description: 'Аналитическая панель с реал-тайм данными',
      tech: ['Vue 3', 'D3.js', 'WebSocket'],
      icon: 'BarChart3'
    },
    {
      title: 'Social Network App',
      description: 'Социальное приложение с чатами',
      tech: ['React', 'Firebase', 'PWA'],
      icon: 'Users'
    }
  ];

  const skills = [
    { name: 'React', level: 95, icon: 'Zap' },
    { name: 'Vue.js', level: 90, icon: 'Wind' },
    { name: 'TypeScript', level: 88, icon: 'Code' },
    { name: 'Next.js', level: 85, icon: 'Layers' },
    { name: 'Tailwind CSS', level: 92, icon: 'Palette' },
    { name: 'Redux', level: 80, icon: 'Box' }
  ];

  const experience = [
    {
      year: '2023-2024',
      company: 'TechCorp',
      position: 'Senior Frontend Developer',
      description: 'Разработка enterprise приложений на React'
    },
    {
      year: '2021-2023',
      company: 'StartupHub',
      position: 'Frontend Developer',
      description: 'Создание SPA на Vue и React'
    },
    {
      year: '2019-2021',
      company: 'WebStudio',
      position: 'Junior Developer',
      description: 'Верстка и базовый JavaScript'
    }
  ];

  return (
    <div className="min-h-screen bg-background dark">
      <nav className="fixed top-0 w-full bg-card/80 backdrop-blur-md border-b border-primary/20 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary flex items-center gap-2">
            <span className="text-3xl">⚔️</span>
            <span>侍</span>
          </div>
          <div className="flex gap-6">
            {['home', 'projects', 'skills', 'experience', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`hover:text-primary transition-colors capitalize ${
                  activeSection === section ? 'text-primary' : 'text-foreground'
                }`}
              >
                {section === 'home' ? 'главная' : section === 'projects' ? 'проекты' : section === 'skills' ? 'навыки' : section === 'experience' ? 'опыт' : 'контакты'}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-90"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6 animate-fade-in">
            <div className="text-sm text-primary font-semibold tracking-widest uppercase">Frontend Developer</div>
            <h1 className="text-6xl font-bold leading-tight">
              Путь <span className="text-primary">Самурая</span> в Коде
            </h1>
            <p className="text-xl text-muted-foreground">
              Создаю элегантные веб-приложения с философией bushido: дисциплина, мастерство, совершенство
            </p>
            <div className="flex gap-4">
              <Button onClick={() => scrollToSection('projects')} size="lg" className="group">
                Портфолио
                <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button onClick={() => scrollToSection('contact')} variant="outline" size="lg">
                Связаться
              </Button>
            </div>
            <div className="flex gap-6 pt-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Github" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Linkedin" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Mail" size={24} />
              </a>
            </div>
          </div>
          <div className="relative animate-slide-left">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg blur-2xl"></div>
            <img 
              src="https://cdn.poehali.dev/projects/31077971-a429-4940-a441-003409cde8a4/files/60257f99-ff2e-4c94-bdd2-b0ac2f8451b8.jpg"
              alt="Samurai Spirit"
              className="relative rounded-lg shadow-2xl border border-primary/20"
            />
            <div className="absolute -bottom-4 -right-4 bg-primary text-white px-6 py-3 rounded-lg font-bold shadow-xl">
              🗡️ Code Warrior
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="min-h-screen py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4">Проекты</h2>
            <p className="text-xl text-muted-foreground">Боевые миссии разработки</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name={project.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button variant="ghost" className="w-full group">
                    Подробнее
                    <Icon name="ExternalLink" className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4">Навыки</h2>
            <p className="text-xl text-muted-foreground">Оружие мастера</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Icon name={skill.icon as any} className="text-primary" size={20} />
                    <span className="font-semibold text-lg">{skill.name}</span>
                  </div>
                  <span className="text-primary font-bold">{skill.level}%</span>
                </div>
                <div className="h-3 bg-card rounded-full overflow-hidden border border-primary/20">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="min-h-screen py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4">Опыт</h2>
            <p className="text-xl text-muted-foreground">Путь воина</p>
          </div>
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-20 pb-12 animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="absolute left-6 w-5 h-5 bg-primary rounded-full border-4 border-background"></div>
                <Card className="hover:border-primary/50 transition-all">
                  <CardContent className="p-6">
                    <div className="text-primary font-bold mb-2">{exp.year}</div>
                    <h3 className="text-2xl font-bold mb-1">{exp.position}</h3>
                    <div className="text-muted-foreground mb-3">{exp.company}</div>
                    <p>{exp.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen py-20 flex items-center">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">Начнем совместную миссию</p>
          </div>
          <Card className="max-w-2xl mx-auto animate-fade-in">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Имя</label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Сообщение</label>
                  <Textarea placeholder="Расскажите о вашем проекте..." rows={6} />
                </div>
                <Button type="submit" size="lg" className="w-full group">
                  Отправить сообщение
                  <Icon name="Send" className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-primary/20 py-8 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Github" size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Linkedin" size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Twitter" size={24} />
            </a>
          </div>
          <p className="text-muted-foreground">© 2024 Samurai Dev. Создано с духом bushido 🗡️</p>
        </div>
      </footer>
    </div>
  );
}
