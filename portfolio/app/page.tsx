import Navbar from "@/components/Navbar";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Navbar/>

			<section id="home">
				Home
			</section>

			<section id="projects">
				Projects	
			</section>

			<section id="contact">
				Contact
			</section>
		</main>
	)
}
