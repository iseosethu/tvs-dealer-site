import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase";

export async function handleFormSubmit({
  formData,
  collectionName,
  formspreeEndpoint,
}) {
  try {
    // ✅ 1. Save to Firestore
    const docRef = await addDoc(collection(db, collectionName), {
      ...formData,
      createdAt: serverTimestamp(),
    });
    console.log("🔥 Firestore doc ID:", docRef.id);

    // ✅ 2. Send email via Formspree
    const res = await fetch(formspreeEndpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    if (result.ok) {
      console.log("📧 Email sent successfully via Formspree.");
    } else {
      console.warn("⚠️ Formspree error:", result);
    }

    return { success: true };
  } catch (error) {
    console.error("❌ Submission error:", error);
    return { success: false, error };
  }
}
