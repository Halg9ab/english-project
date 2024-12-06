import { notFound } from 'next/navigation'

const blogPosts = [
  { id: 1, title: 'Top 10 Meme Games of 2023', slug: 'top-10-meme-games-2023', content: 'This is the content for Top 10 Meme Games of 2023.' },
  { id: 2, title: 'How NVTC Impacted My Life', slug: 'how-nvtc-impacted-my-life', content: `At first, I heard many great things about NVTC as it is "THE SCHOOL NAMED AFTER THE PRINCE," so my expectations were extremely high—maybe even too high. Alright, let me be honest: why did I enroll in this school? Well, first, I heard they gave free iPads for students to use and study with, which piqued my interest, as it would for anyone else. I mean, hearing about a school giving out high-end technology in its respective field for students sounds amazing. But I was a fool for thinking they were still "free." We had to pay for insurance, which would be fine, but the cost was absurd—100 BHD for the laptops for IT students and 50 BHD for the iPads for engineering or unspecialized students.

Second, I heard they were giving money to hardworking students, and that would've been great. However, the school was originally sponsored by the UAE and is now sponsored by Bahrain, so those giveaways were no more, and that was a bummer to hear.

Something different they do from other schools is that they have a discipline office with officers to help contain students' behavior. However, they take it to a level where this school doesn't feel like a normal school. No, it feels more like a prison with the number of restrictions they put on us.

Lastly, the most important aspect is the studying, curriculum, courses, and their ways of teaching. Let me say something while being fully honest: this school is not easy. Not everyone can handle the studying and the restrictions. Some students fail and end up getting kicked out, which is why the school implemented a system of "Advanced" and "General" studies. For example, IT specialties are Advanced—AI, Cloud Computing, and Cybersecurity. There are no general studies for IT. On the other hand, there are two different sectors for the engineering specialty: the "Advanced" and "General" sectors. The Advanced sector is for students with high capabilities and for whom the school has high expectations. The General sector is for students with limited capabilities.

But this school was nothing less than a life lesson I received without asking for it. First, from the idea I gave about the iPads, I learned to cope with problems because life throws challenges at you all the time. Yes, sometimes you have to stand your ground and speak your mind, but many other times, there's nothing you can do, so you just let it go. Sometimes, the tighter you hold on, the more it hurts.

Discipline is a great trait everyone must attain one way or another, and it's something I learned while studying at NVTC due to the number of restrictions and the importance of following the rules. The most important thing about a school is the studies. At NVTC, I learned many different ways of studying, including self-studies, because I couldn't always get along with some teachers. I had to teach myself how to study all by myself and in a practical way, being able to manage my time effectively.

NVTC is not a perfect school, but it's definitely a great life lesson beyond your expectations.` },
  { id: 3, title: "What's It Like to Be a Student in NVTC", slug: 'student-life-in-nvtc', content: `My name is Yaser Ahmed, I am a student at Nasser Vocational Training Center, I have learned a lot of things that were new to me – for example, AI (Artificial intelligence), ML (Machine Learning), DL (Deep Learning), and how to deal with work under pressure.

My first year at school was good, not that bad, but it was a little bit difficult at first, but I got used to it, until the final exams. It was the hardest thing, if you are not used to the system of the final exams you will be in big trouble, for example you might get nervous and be faced with some difficult questions, you should avoid them and go to the easier questions. This way you can manage your time, even though in some cases if you tried to search for easy questions, but then you might end up reaching the end of the exam, and then the only thing you will see at the end of the paper is good luck, then you will know that you're cooked.

Now I will talk about the things that I have learned, first AI (Artificial intelligence), Artificial intelligence (AI) is a set of technologies that enable computers to perform a variety of advanced functions, including the ability to see, understand and translate spoken and written language, analyze data, make recommendations, and more.

Second, ML (Machine Learning), Machine learning (ML) is a branch of computer science that focuses on using data and algorithms to enable AI to imitate the way that humans learn, gradually improving its accuracy.

Lastly, DL (Deep Learning), Deep learning (DL) is a type of machine learning that uses artificial neural networks to learn from data. Artificial neural networks are inspired by the human brain, and they can be used to solve a wide variety of problems, including image recognition, natural language processing, and speech recognition.

All of the things that I have learned during these years are a lot of help for my future career. So, in that way in college all the experience that I have gained, from how to write a report, how to get used to being under a lot of pressure, and how to manage my time the right way. My advice to you is to practice more and more. But, before you start practicing, you must first define your weaknesses

then decide which subjects need more time. Begin with the subjects that need less time, so you can concentrate on the topics that need more effort. Also, you can use all of your time without wasting any of your precious time. The point is to use your time wisely and put a backup plan in case if your plans have changed, so you don't get nervous and so you don't waste any more time.` },
]

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="prose lg:prose-xl mx-auto">
      <h1>{post.title}</h1>
      {post.content.split('\n\n').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </article>
  )
}

