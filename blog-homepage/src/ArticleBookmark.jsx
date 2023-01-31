import React from 'react'
import { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons'
import { faBookmark as faBookmarkSolid } from '@fortawesome/free-solid-svg-icons'

function ArticleBookmark() {
  library.add(faBookmarkRegular, faBookmarkSolid);

  const [isBookmarked, setIsBookmarked] = useState(true);

  return (
    <div className='article-bookmark' onClick={() => {setIsBookmarked(!isBookmarked)}}>
      {
        isBookmarked ? 
        <FontAwesomeIcon icon='fa-regular fa-bookmark'/> : 
        <FontAwesomeIcon icon='fa-solid fa-bookmark' color='green' />
      }
    </div>

  )
}

export default ArticleBookmark