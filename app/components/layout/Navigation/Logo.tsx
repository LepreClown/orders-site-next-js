import Link from 'next/link'
import { FC } from 'react'

import Heading from '@/ui/heading/Heading'

const Logo: FC = () => {
	return (
		<Link href={'/'}>
			<div className="flex justify-center px-layout mb-10  items-center">
				<Heading title="PRIM" className="tracking-[0.5em] text-primary text-5xl" />
				<Heading title="E" className="text-primary text-5xl" />
			</div>
		</Link>
	)
}

export default Logo
