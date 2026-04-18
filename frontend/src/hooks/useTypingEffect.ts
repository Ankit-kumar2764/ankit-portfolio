import { useEffect, useMemo, useState } from "react";

export function useTypingEffect(words: string[], speed = 90, pause = 1200) {
  const safeWords = useMemo(() => words.filter(Boolean), [words]);
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!safeWords.length) return;

    const currentWord = safeWords[wordIndex % safeWords.length];
    const delay = isDeleting ? speed / 1.8 : speed;

    const timeout = window.setTimeout(
      () => {
        if (!isDeleting) {
          const nextText = currentWord.slice(0, text.length + 1);
          setText(nextText);

          if (nextText === currentWord) {
            window.setTimeout(() => setIsDeleting(true), pause);
          }
        } else {
          const nextText = currentWord.slice(0, text.length - 1);
          setText(nextText);

          if (!nextText) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % safeWords.length);
          }
        }
      },
      isDeleting ? delay : text === currentWord ? pause : delay
    );

    return () => window.clearTimeout(timeout);
  }, [isDeleting, pause, safeWords, speed, text, wordIndex]);

  return text;
}
