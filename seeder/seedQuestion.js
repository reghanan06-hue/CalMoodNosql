
import mongoose from "mongoose";
import Test from "../models/Test.js";
import Question from "../models/Question.js";

const MONGO_URI = "mongodb://localhost:27017/moodApp";

const QUESTIONS_BY_TEST = {
  Bonheur: [
    "Te sens-tu heureux aujourd’hui ?",
    "As-tu souri aujourd’hui ?",
    "Te sens-tu satisfait de ta journée ?",
    "Ressens-tu de la joie ?",
    "Te sens-tu en paix intérieure ?",
    "Apprécies-tu les petites choses ?",
    "Te sens-tu reconnaissant ?",
    "As-tu vécu un moment positif aujourd’hui ?",
    "Te sens-tu optimiste pour demain ?"
  ],

  Stress: [
    "Te sens-tu stressé aujourd’hui ?",
    "As-tu des tensions physiques ?",
    "As-tu du mal à te détendre ?",
    "Te sens-tu débordé ?",
    "Ton esprit est-il agité ?",
    "As-tu des difficultés à respirer calmement ?",
    "Te sens-tu sous pression ?",
    "As-tu du mal à dormir ?",
    "Te sens-tu fatigué mentalement ?"
  ],

  Confiance: [
    "Te sens-tu sûr de toi ?",
    "Crois-tu en tes capacités ?",
    "Prends-tu des décisions facilement ?",
    "Te sens-tu à l’aise avec les autres ?",
    "Oses-tu exprimer ton opinion ?",
    "Te sens-tu valorisé ?",
    "As-tu une bonne image de toi ?",
    "Te sens-tu motivé ?",
    "Te sens-tu capable de réussir ?"
  ],

  Panique: [
    "As-tu déjà ressenti une crise d’angoisse ?",
    "Ton cœur bat-il vite sans raison ?",
    "As-tu peur sans raison apparente ?",
    "Te sens-tu submergé soudainement ?",
    "As-tu du mal à respirer en situation de stress ?",
    "As-tu peur de perdre le contrôle ?",
    "Te sens-tu inquiet sans raison ?",
    "As-tu des sensations physiques soudaines ?",
    "As-tu peur dans des lieux publics ?"
  ],

  Dormir: [
    "As-tu du mal à t’endormir ?",
    "Te réveilles-tu souvent la nuit ?",
    "Te sens-tu reposé le matin ?",
    "Dors-tu moins de 7 heures ?",
    "As-tu un sommeil agité ?",
    "Te réveilles-tu fatigué ?",
    "As-tu des insomnies ?",
    "Ton sommeil est-il réparateur ?",
    "Fais-tu des cauchemars fréquents ?"
  ],

  Alimentation: [
    "Manges-tu équilibré ?",
    "Grignotes-tu souvent ?",
    "As-tu perdu l’appétit récemment ?",
    "Manges-tu en excès parfois ?",
    "Te sens-tu à l’aise avec ton alimentation ?",
    "As-tu des habitudes alimentaires régulières ?",
    "Manges-tu sous stress ?",
    "Bois-tu assez d’eau ?",
    "Te sens-tu énergique après manger ?"
  ],

  Affectif: [
    "Te sens-tu entouré ?",
    "As-tu des relations stables ?",
    "Te sens-tu aimé ?",
    "As-tu quelqu’un à qui parler ?",
    "Te sens-tu seul parfois ?",
    "As-tu confiance en tes proches ?",
    "Te sens-tu soutenu ?",
    "Es-tu satisfait de tes relations ?",
    "Te sens-tu compris ?"
  ],

  Émotionnel: [
    "Contrôles-tu bien tes émotions ?",
    "Te sens-tu souvent triste ?",
    "Changes-tu rapidement d’humeur ?",
    "Exprimes-tu facilement tes émotions ?",
    "Te sens-tu stable émotionnellement ?",
    "Pleures-tu facilement ?",
    "Te sens-tu dépassé par tes émotions ?",
    "Te sens-tu calme la plupart du temps ?",
    "Comprends-tu tes émotions ?"
  ],

  Obsession: [
    "As-tu des pensées répétitives difficiles à contrôler ?",
    "Penses-tu souvent à la même chose sans pouvoir t’arrêter ?",
    "As-tu du mal à te concentrer ?",
    "Te sens-tu envahi par tes pensées ?",
    "As-tu des idées qui reviennent sans arrêt ?",
    "Te sens-tu bloqué mentalement ?",
    "As-tu du mal à te détacher de certaines pensées ?",
    "Ces pensées t’angoissent-elles ?",
    "Te sens-tu mentalement fatigué ?"
  ],

  Dépression: [
    "Te sens-tu triste sans raison ?",
    "As-tu perdu intérêt pour les choses ?",
    "Te sens-tu fatigué souvent ?",
    "As-tu du mal à te motiver ?",
    "Te sens-tu vide ?",
    "As-tu des pensées négatives ?",
    "Te sens-tu isolé ?",
    "Ton humeur est-elle basse ?",
    "Te sens-tu sans énergie ?"
  ]
};

async function seedQuestions() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected");

    const tests = await Test.find();

    for (const test of tests) {
      const questionsList = QUESTIONS_BY_TEST[test.title];

      if (!questionsList) {
        console.log(`⚠️ Pas de questions définies pour: ${test.title}`);
        continue;
      }

      await Question.deleteMany({ test: test._id });

      const questions = questionsList.map((q) => ({
        test: test._id,
        question: q
      }));

      await Question.insertMany(questions);

      console.log(`✅ ${questions.length} questions ajoutées pour ${test.title}`);
    }

    console.log("🚀 Seed questions terminé");
    process.exit();

  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seedQuestions();