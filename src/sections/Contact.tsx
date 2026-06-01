"use client";

import { useState } from "react";

import Button from "@/components/Button";
import Section from "@/components/Section";
import Input from "@/components/Input";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const [status, setStatus] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("Message sent successfully.");

                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });
            } else {
                setStatus("Something went wrong.");
            }
        } finally {
            setLoading(false);
        }
    };

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
                <form
                    onSubmit={handleSubmit}
                    className="space-y-5 rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm"
                >
                    <Input
                        label="Name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                        }
                    />

                    <Input
                        label="Email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                    />

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                            Message
                        </label>

                        <textarea
                            rows={6}
                            placeholder="Tell me about your project or opportunity..."
                            className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none transition focus:border-black/20"
                            value={formData.message}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    message: e.target.value,
                                })
                            }
                        />
                    </div>

                    <Button>{loading ? "Sending..." : "Send Message"}</Button>
                    {status && (
                        <p className="text-sm text-gray-500">{status}</p>
                    )}
                </form>
            </div>
        </Section>
    );
}
