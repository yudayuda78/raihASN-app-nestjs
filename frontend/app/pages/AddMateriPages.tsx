import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";

export function AddMateriPages() {
  const choices = ["A", "B", "C", "D", "E"];
  type Choice = (typeof choices)[number];

  const [nomor, setNomor] = useState("");
  const [soal, setSoal] = useState("");
  const [answers, setAnswers] = useState<Record<Choice, string>>({
    A: "",
    B: "",
    C: "",
    D: "",
    E: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      nomor,
      soal,
      jawaban: answers,
    };

    console.log("DATA DIKIRIM:", payload);
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>Nomor</FormLabel>
        <Select
          placeholder="Nomor Soal"
          value={nomor}
          onChange={(e) => setNomor(e.target.value)}
        >
          {Array.from({ length: 30 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </Select>

        <FormLabel>Soal</FormLabel>
        <Input
          type="text"
          placeholder="Masukkan Soal Disini"
          value={soal}
          onChange={(e) => setSoal(e.target.value)}
        />

        {/* Jawaban A–E */}
        {choices.map((choice) => (
          <div key={choice}>
            <FormLabel>Jawaban {choice}</FormLabel>
            <Input
              type="text"
              placeholder={`Masukkan Jawaban ${choice}`}
              value={answers[choice]}
              onChange={(e) =>
                setAnswers((prev) => ({ ...prev, [choice]: e.target.value }))
              }
            />
          </div>
        ))}

        {/* Submit Button */}
        <Button
          mt={4}
          type="submit"
          bg="#5c40c2"
          color="white"
          _hover={{ bg: "#4a32a0" }}
        >
          Submit Materi
        </Button>
      </FormControl>
    </Box>
  );
}
