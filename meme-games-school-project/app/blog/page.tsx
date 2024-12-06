import Link from 'next/link'

const blogPosts = [
  { id: 1, title: 'Top 10 Meme Games of 2023', slug: 'top-10-meme-games-2023' },
  { id: 2, title: 'How NVTC Impacted My Life', slug: 'how-nvtc-impacted-my-life' },
  { id: 3, title: "What's It Like to Be a Student in NVTC", slug: 'student-life-in-nvtc' },
]

export default function BlogPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Meme Games Blog</h1>
      <div className="space-y-4">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">
              <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600">
              Click to read more about this interesting topic...
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

