'use client';

export default function GenerateButton({ catName }: { catName: string }) {
  function onClick() {
    document.body.innerText = catName;
  }

  return <button onClick={onClick}>generate</button>;
}
