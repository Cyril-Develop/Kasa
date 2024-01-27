import './card.scss'
import { Link } from 'react-router-dom'

export default function Card({id, title, cover}) {

	return (
		<Link to={`/kasa/accomodation/${id}`} className="gallery_card">
			<img src={cover} alt={"kasa -" + title} />
			<h3>{title}</h3>	
		</Link>
	)
}
