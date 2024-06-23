import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
    space: 'mwu7czj2d43k',
    environment: 'master',
    accessToken: import.meta.env.VITE_ACCESS_TOKEN
})

export const useFetchProject = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [projects, setProject] = useState([])

    const getData = async () => {
        try {
            const response = await client.getEntries({ content_type: 'projects' })
            const projects = response.items.map(item => {
                const { title, url, image } = item.fields
                const id = item.sys.id
                const img = image?.fields?.file?.url
                return { title, url, id, img }
            })
            setProject(projects)
            setIsLoading(false)
        } catch (error) {
            console.log(error);
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return { projects, isLoading }

}

