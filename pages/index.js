import { useRouter } from 'next/router'
import Layout from '../components/Layout'

export default function Home({ data }) {
  // console.log(data);
  const router = useRouter()


  return (
    <>
      <Layout title='HomePage' >
        <div className=" flex flex-col justify-center">
          <div className="main  grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

            {data.map(user => {
              return (
                <div key={user.id} className="content bg-gray-200 p-3 rounded-md">
                  {/* SVG */}
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>

                  {/* TEXT */}
                  <div className="text">
                    <h3 className='name mt-2 text-lg'>{user.name}</h3>
                    <h4 className='email'>{user.email}</h4>
                    <button onClick={() => { router.push(`/userdetails/${user.id}`) }} className="mt-1 text-indigo-500 inline-flex items-center">Get Details
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              )
            })}

          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getServerSideProps() {

  const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const data = await res.json()

  return {
    props: { data },
  }
}
