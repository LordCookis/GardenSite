import { useState } from "react"
import { services } from "@/services"

export default function AddObject() {
	const [object, setObject] = useState({
		name: "",
		description: "",
		chapter: ""
	})
  const [image, setImage] = useState([])

	const addObject = async(e) => {
    e.preventDefault()
    if (!object.name && !image) { return }
    await services.base.add(object, image)
		setObject({
			name: "",
			description: "",
			chapter: ""
		})
		setImage([])
  }

	const uploadImage = async(e) => setImage(e.target.files[0])

  return(
    <form className="AddObjectPage" onSubmit={addObject}>
      <span className="Span">ДОБАВИТЬ СТАТЬЮ</span>
      <input className="Input" placeholder="НАЗВАНИЕ ТЕМЫ" value={object.name} onChange={(e)=>setObject({...object, name: e.target.value})} autoComplete="off"/>
      <textarea className="Textarea" placeholder="СТАТЬЯ" value={object.description} onChange={(e)=>setObject({...object, description: e.target.value})} autoComplete="off"/>
      <input className="Input" placeholder="РАЗДЕЛ" value={object.chapter} onChange={(e)=>setObject({...object, chapter: e.target.value})} autoComplete="off"/>
      <input className="Input" type="file" name={image} onChange={uploadImage} autoComplete="off"/>
      <button className="Button">ДОБАВИТЬ</button>
    </form>
  )
} 