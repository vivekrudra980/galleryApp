import './index.css'

const ThumbnailItem = props => {
  const {details, showImage} = props
  const {id, thumbnailUrl, thumbnailAltText} = details

  const showLargeImage = () => {
    showImage(id)
  }
  return (
    <li className="thumbnail">
      <button type="button" onClick={showLargeImage}>
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
