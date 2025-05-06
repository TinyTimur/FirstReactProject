

export default function WayToTeach({title, description}) {           // Раньше здесь был props который из себя представлял поступающий при вызове функции - объект из массива ways. Мы этот объект деструктурировали и обращаемся именно к сущностям title и description
                                                      
  return(
    <li>
      <p>
        <strong>{title}</strong>{description}  
      </p> 
    </li>
  )
}
