import Link from 'next/link'
import { FC } from 'react'

import Heading from '@/ui/heading/Heading'

const Logo: FC = () => {
	return (
		<Link href={'/'}>
			<div className="flex justify-center px-layout mb-10  items-center">
				<Heading title="PRIME" className="tracking-[0.6em]" />
			</div>
		</Link>
	)
}

export default Logo
