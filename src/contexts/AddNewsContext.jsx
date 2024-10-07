import { createContext, useState } from "react";

const NewsStructure = {
    title: '',
    isi_konten: [],
    nama_penulis: '',
    thumbnail: '',
    date: '',
    kategori: '',
    link: '',
}

export const NewsPublishContext = createContext()

const AddNewsContext = ({children}) => {
    const [news, setNews] = useState(NewsStructure)
    const [textEditor, setTextEditor] = useState({isReady: false})
    
    return (
        <NewsPublishContext.Provider value={{news, setNews, textEditor, setTextEditor}}>
            {children}
        </NewsPublishContext.Provider>
    )
}

export default AddNewsContext