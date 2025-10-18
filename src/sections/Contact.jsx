import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState(""); // buat nampilin pesan sukses/gagal

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    const form = e.target;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/mnngwkyv", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setStatus("success");
      form.reset(); // reset form setelah kirim
    } else {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section">
      <h2 className="text-3xl font-semibold">Contact</h2>
      <p className="mt-4 text-ink/70 max-w-prose">
        punya project atau kolaborasi? Kirim pesan ke email gue
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-6 grid gap-4 max-w-xl"
      >
        <input
          name="Oktariza"
          required
          placeholder="Your Name"
          className="card px-4 py-3 outline-none"
        />
        <input
          name="subject"
          required
          placeholder="Subject"
          className="card px-4 py-3 outline-none"
        />
        <textarea
          name="message"
          required
          rows="6"
          placeholder="Message"
          className="card px-4 py-3 outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary w-fit"
        >
          {status === "loading" ? "Sending..." : "Send"}
        </button>

        {/* Status feedback */}
        {status === "success" && (
          <p className="text-green-600 mt-2">✅ Pesan berhasil dikirim!</p>
        )}
        {status === "error" && (
          <p className="text-red-600 mt-2">❌ Gagal mengirim pesan, coba lagi.</p>
        )}
      </form>
    </section>
  );
}
