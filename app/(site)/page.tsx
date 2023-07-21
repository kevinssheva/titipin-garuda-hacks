import Image from 'next/image'
import Landing from '@/app/(site)/components/landing/Landing'
import RegisterModal from '../components/Modals/RegisterModal'
import LoginModal from '../components/Modals/LoginModal'

export default function Home() {
  return (
    <>
      <RegisterModal />
      <LoginModal />
      <Landing />
    </>
  )
}
