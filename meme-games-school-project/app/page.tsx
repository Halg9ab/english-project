import Image from 'next/image'

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Meme Games Project!</h1>
      <p className="text-xl mb-8">Explore the hilarious world of meme-inspired games and articles.</p>
      <Image
        src="https://media.licdn.com/dms/image/v2/C4D0BAQGqH80_BaLMSQ/company-logo_200_200/company-logo_200_200/0/1630547676493/nasser_vocational_tranining_centre_logo?e=2147483647&v=beta&t=bWeX_Zy-OmD6zEu8TXbMoAoY71YVVcIOQSdz7jOZxUg"
        alt="NVTC Logo"
        width={200}
        height={200}
        className="mx-auto rounded-lg shadow-lg"
      />
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Gaming Memes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <Image
              src="https://cdn.ebaumsworld.com/mediaFiles/picture/718392/87397330.jpeg"
              alt="Alt F4 Gaming Meme"
              width={300}
              height={300}
              className="w-full h-48 object-cover rounded-lg mb-2"
            />
            <h3 className="text-lg font-semibold">Classic Gaming Tricks</h3>
            <p>how about you alt+f4 yourself bud</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <Image
              src="https://www.gamedesigning.org/wp-content/uploads/2015/08/A95.jpg"
              alt="Retro Game Character"
              width={300}
              height={300}
              className="w-full h-48 object-cover rounded-lg mb-2"
            />
            <h3 className="text-lg font-semibold">gaming is life</h3>
            <p>gaming is life what can we say</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <Image
              src="https://i.pinimg.com/550x/56/b6/bc/56b6bc76efc37eaf3ebc148a27b52896.jpg"
              alt="Modern Game Character"
              width={300}
              height={300}
              className="w-full h-48 object-cover rounded-lg mb-2"
            />
            <h3 className="text-lg font-semibold">annoying</h3>
            <p>PICK A GOOD TIMING PEOPLE FOR THE LOVE ODF GOD!!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

