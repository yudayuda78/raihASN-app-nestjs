import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

export function FaqContent() {
  const faqs: FaqItem[] = [
    {
      question: "Apa itu RaihASN?",
      answer:
        "RaihASN adalah platform persiapan ujian CPNS dan PPPK yang menyediakan tryout, latihan soal, serta bimbingan belajar online.",
    },
    {
      question: "Apakah tryout bisa diakses lewat HP?",
      answer:
        "Ya, semua tryout dan materi pembelajaran bisa diakses melalui perangkat apa pun, termasuk smartphone.",
    },
    {
      question: "Apakah ada sertifikat setelah menyelesaikan tryout?",
      answer:
        "Ya, untuk paket premium dan pro, peserta akan mendapatkan sertifikat penyelesaian digital.",
    },
    {
      question: "Bagaimana cara bergabung di kelas bimbingan?",
      answer:
        "Setelah membeli paket Premium atau Pro, kamu akan otomatis mendapatkan akses ke grup bimbingan dan jadwal kelas live.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">FAQ</h2>
        <p className="text-gray-600">
          Pertanyaan yang sering diajukan tentang layanan RaihASN
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm bg-white"
          >
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full flex justify-between items-center text-left px-6 py-4 font-medium text-gray-800 hover:bg-gray-50 transition"
            >
              {faq.question}
              <span className="text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600 border-t border-gray-100">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
