import Button from "@/components/Button";
import Section from "@/components/Section";
import Input from "@/components/Input";

export default function Contact() {
    return (
        <Section id="contact" title="Contact">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
                {/* Left Side */}
                <div className="space-y-6">
                    <p className="max-w-md text-lg leading-8 text-gray-500">
                        Open to job opportunities, collaborations, and
                        conversations around software, AI systems, and practical
                        business workflows.
                    </p>

                    <div className="space-y-4 text-gray-600">
                        <div>
                            <p className="text-sm text-gray-400">Email</p>

                            <p>tommyeareast@gmail.com</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-400">GitHub</p>

                            <p>github.com/Tommyeareast</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-400">LinkedIn</p>

                            <p>linkedin.com/in/tommy-chen-syd</p>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <form className="space-y-5 rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm">
                    <Input label="Name" placeholder="Your name" />

                    <Input
                        label="Email"
                        type="email"
                        placeholder="you@example.com"
                    />

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                            Message
                        </label>

                        <textarea
                            rows={6}
                            placeholder="Tell me about your project or opportunity..."
                            className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none transition focus:border-black/20"
                        />
                    </div>

                    <Button>Send Message</Button>
                </form>
            </div>
        </Section>
    );
}
