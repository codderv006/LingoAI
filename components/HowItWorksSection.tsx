"use client";

import { motion } from 'framer-motion';
import { Mic, BookOpen, MessageSquare, BarChart4 } from 'lucide-react';

const steps = [
	{
		number: "01",
		title: "Choose a Language",
		description: "Select from 10 major languages to begin your learning journey",
		icon: BookOpen,
		color: "bg-blue-500"
	},
	{
		number: "02",
		title: "Start Conversing",
		description: "Jump straight into a natural conversation with our AI tutor",
		icon: Mic,
		color: "bg-indigo-500"
	},
	{
		number: "03",
		title: "Practice Scenarios",
		description: "Role-play real-world situations to build practical fluency",
		icon: MessageSquare,
		color: "bg-purple-500"
	},
	{
		number: "04",
		title: "Track Progress",
		description: "Monitor your improvement with detailed analytics and feedback",
		icon: BarChart4,
		color: "bg-pink-500"
	}
];

export function HowItWorksSection() {
	return (
		<section id="how-it-works" className="py-12 sm:py-16 md:py-20 bg-muted/50">
			<div className="container px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-10 sm:mb-14 md:mb-16">
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
						How LingoAI Works
					</h2>
					<p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
						Our 10-step learning framework makes language acquisition natural and effective
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
					{steps.map((step, index) => (
						<motion.div
							key={index}
							className="relative"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
						>
							<div className="bg-card border rounded-xl p-4 sm:p-6 h-full flex flex-col">
								<div className={`h-10 w-10 sm:h-12 sm:w-12 rounded-full ${step.color} flex items-center justify-center text-white font-bold mb-3 sm:mb-4`}>
									<step.icon className="h-5 w-5 sm:h-6 sm:w-6" />
								</div>
								<div className="text-4xl sm:text-5xl font-bold text-muted-foreground/20 absolute top-4 right-4 sm:top-6 sm:right-6">
									{step.number}
								</div>
								<h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{step.title}</h3>
								<p className="text-sm sm:text-base text-muted-foreground">{step.description}</p>
							</div>

							{index < steps.length - 1 && (
								<div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-border">
									<div className="absolute -right-1 -top-[3px] w-2 h-2 rounded-full bg-border"></div>
								</div>
							)}
						</motion.div>
					))}
				</div>

				<div className="mt-12 sm:mt-16 text-center">
					<h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">The 10-Step Learning Framework</h3>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 max-w-5xl mx-auto">
						{[
							"Phonetics & Pronunciation",
							"Basic Vocabulary",
							"Grammar Structure",
							"Scenario Roleplay",
							"Shadowing & Mimicking",
							"Free Conversation",
							"Reading & Listening",
							"Writing Practice",
							"Real-World Simulation",
							"Progress Assessment"
						].map((step, index) => (
							<motion.div
								key={index}
								className="bg-card border rounded-lg p-3 sm:p-4 flex items-center justify-center text-center"
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.3, delay: index * 0.05 }}
								viewport={{ once: true }}
							>
								<div>
									<div className="bg-primary/10 rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mx-auto mb-1 sm:mb-2">
										<span className="text-xs sm:text-sm font-medium text-primary">{index + 1}</span>
									</div>
									<p className="text-xs sm:text-sm font-medium">{step}</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}