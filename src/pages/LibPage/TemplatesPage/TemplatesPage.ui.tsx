import { useSelector } from 'react-redux'
import { selectTemplates } from '../../../entities/Templates/model/selector'
import TemplateItem from '../../../entities/Templates/ui/TemplateItem.ui'

export function TemplatesPage() {
  const templates = useSelector(selectTemplates)
  return (
    <div>
      {templates.length == 0 ? (
        <div className="flex flex-col justify-center items-center w-full min-h-30 rounded-xl bg-zinc-800 text-zinc-400">
          Нет шаблонов
        </div>
      ) : (
        templates.map((template) => {
          return <TemplateItem key={template.id} template={template} />
        })
      )}
    </div>
  )
}
