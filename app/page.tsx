import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Facebook, Linkedin, Twitter, Mail, MapPin, Phone, Laptop, Users, GraduationCap, Rocket } from 'lucide-react'

export default function Home() {
  const programs = [
    {
      title: "AI & Machine Learning",
      description: "Learn to build intelligent applications using cutting-edge AI technologies. Master neural networks, deep learning, and practical AI implementation.",
      icon: Laptop,
      duration: "12 weeks",
      level: "Beginner to Advanced"
    },
    {
      title: "Full-Stack Development",
      description: "Comprehensive training in modern web development, from front-end frameworks to backend systems and cloud deployment.",
      icon: Rocket,
      duration: "16 weeks",
      level: "All Levels"
    },
    {
      title: "Entrepreneurship Track",
      description: "Transform your tech skills into a business. Learn startup fundamentals, business planning, and how to launch your own tech company.",
      icon: Users,
      duration: "8 weeks",
      level: "Intermediate"
    },
    {
      title: "STEM Foundations",
      description: "Build a strong foundation in Science, Technology, Engineering, and Mathematics with hands-on projects and real-world applications.",
      icon: GraduationCap,
      duration: "10 weeks",
      level: "Beginner"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">GPA Tech Center</span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 w-[400px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link href="#about" className="flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                          <div className="mb-2 mt-4 text-lg font-medium">Our Mission</div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Empowering students with technology skills to build their own companies before graduation
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#programs" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Programs
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#enrollment" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Enrollment
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#contact" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Apply Now
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 opacity-90" />
          <div className="relative container px-4 py-32 md:py-48">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Build Your Tech Company Before You Graduate
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                GPA Tech provides comprehensive STEM education and AI application development training, empowering students to become tech entrepreneurs
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white hover:bg-gray-100 text-blue-900">
                  Start Your Journey
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-900">
                  View Programs
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container px-4">
            <h2 className="text-3xl font-bold text-center mb-6">Transforming Students into Tech Entrepreneurs</h2>
            
            <Badge className="mx-auto mb-8 text-lg py-2 px-4 block w-fit bg-blue-600 hover:bg-blue-700 text-white">
              501(c)(3) Nonprofit Tech School
            </Badge>
            
            <Card className="mb-12 border-none shadow-sm">
              <CardContent className="pt-6">
                <p className="text-lg text-center max-w-4xl mx-auto">
                  GPA Tech Center is a nonprofit organization dedicated to providing world-class STEM education 
                  and practical technology training. We believe every student has the potential to build innovative 
                  technology solutions and create successful companies. Our comprehensive programs combine technical 
                  skills with entrepreneurship training to prepare students for the future of technology.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-blue-600 border-t-4">
                <CardHeader>
                  <CardTitle className="text-xl text-center">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center">
                    To provide accessible, high-quality technology education that empowers students to become 
                    innovators, entrepreneurs, and leaders in the tech industry.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-blue-600 border-t-4">
                <CardHeader>
                  <CardTitle className="text-xl text-center">Our Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center">
                    Hands-on learning with real-world projects, mentorship from industry professionals, 
                    and a focus on building market-ready applications and businesses.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-blue-600 border-t-4">
                <CardHeader>
                  <CardTitle className="text-xl text-center">Your Future</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center">
                    Graduate with your own tech company, a portfolio of projects, and the skills 
                    needed to succeed in the modern technology landscape.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="programs" className="py-16">
          <div className="container px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <Card key={index} className="shadow-md hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-gray-50">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="bg-blue-600 p-3 rounded-full">
                      <program.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="secondary">{program.duration}</Badge>
                        <Badge variant="outline">{program.level}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{program.description}</p>
                    <Button variant="outline" className="text-blue-600 hover:bg-blue-600 hover:text-white">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="enrollment" className="py-16 bg-blue-50">
          <div className="container px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Start Your Tech Journey Today</h2>
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Enrollment Process</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</div>
                    <div>
                      <h3 className="font-semibold">Application</h3>
                      <p className="text-muted-foreground">Submit your online application with basic information about your interests and goals</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</div>
                    <div>
                      <h3 className="font-semibold">Assessment</h3>
                      <p className="text-muted-foreground">Complete a brief assessment to help us understand your current skill level</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</div>
                    <div>
                      <h3 className="font-semibold">Interview</h3>
                      <p className="text-muted-foreground">Have a conversation with our admissions team about your aspirations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">4</div>
                    <div>
                      <h3 className="font-semibold">Begin Learning</h3>
                      <p className="text-muted-foreground">Start your journey to becoming a tech entrepreneur</p>
                    </div>
                  </div>
                  <div className="text-center pt-6">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="container px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-blue-400" />
                    <span>Tampa, Florida</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-blue-400" />
                    <span>Contact us for more information</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue-400" />
                    <a href="mailto:questions@gpatech.org" className="hover:underline">questions@gpatech.org</a>
                  </div>
                </div>
                <div className="flex gap-4 pt-4">
                  <Link href="#" className="text-white hover:text-blue-400">
                    <Facebook className="h-6 w-6" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link href="#" className="text-white hover:text-blue-400">
                    <Twitter className="h-6 w-6" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link href="#" className="text-white hover:text-blue-400">
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Join Our Mission</h3>
                <p>
                  Whether you&apos;re a student ready to start your tech journey, a parent looking for the best 
                  education for your child, or a supporter of our mission, we&apos;d love to hear from you.
                </p>
                <div className="flex gap-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Get Started
                  </Button>
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
                    Support Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-gradient-to-b from-background to-gray-50">
        <div className="container px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <span className="font-bold">GPA Tech Center</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Empowering students to build their own tech companies through comprehensive STEM education.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#programs" className="text-sm text-muted-foreground hover:text-foreground">
                    Programs
                  </Link>
                </li>
                <li>
                  <Link href="#enrollment" className="text-sm text-muted-foreground hover:text-foreground">
                    Enrollment
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Programs</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    AI & Machine Learning
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Full-Stack Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Entrepreneurship
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    STEM Foundations
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Stay Updated</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get the latest news about our programs and student success stories.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Subscribe
              </Button>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} GPA Tech Center. All rights reserved. A 501(c)(3) Nonprofit Organization.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
