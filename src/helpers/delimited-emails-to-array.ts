export default function delimitedEmailsToArray(text: string | null = "") {
  if (!text || !text.trim().length) return [];
  const emails = text.split(",").map((email) => email.trim());
  return emails.reduce<{ email: string }[]>(
    (emailArr, email) => emailArr.concat({ email }),
    [],
  );
}
