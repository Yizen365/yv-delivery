import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import FormInput from "./FormInput"
import { UploadButton } from "@/lib/uploadthing"
import { useEffect, useState } from "react"
import { createUpdateCategory } from "@/services/categoriesCRUD"
import { toast } from "@/hooks/use-toast"

const CreateUpdateCategories = ({children, category}) => {
    const [image, setImage] = useState("")

    useEffect(() => {
        if (category?.image) {
            setImage(category.image)
        }
    }, [])
    

    const handleSubmit = async (formData) => {
        const res = await createUpdateCategory(formData, image, category?.id)

        if (res?.error) {
            toast({ title: res.error })
        } else {
            toast({ title: `Category ${category ? "updated" : "created"} successfully`})
            setImage("")
        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">{children}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{children}</DialogTitle>
                    <DialogDescription>
                        Create your categories here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <form action={handleSubmit}>
                    <FormInput label="Category Name" id="name" type="text" defaultValue={category ? category?.name : ""} placeholder="Enter category name" className="h-10" />
                    {!image ? <UploadButton
                        endpoint="imageUploader"
                        appearance={{
                            button: "ut-uploading:cursor-not-allowed bg-slate-600 w-full after:bg-orange-400 max-w-[700px]",
                            allowedContent: "hidden",
                        }}
                        onClientUploadComplete={(res) => {
                            setImage(res[0].url)
                        }}
                        onUploadError={(error) => {
                            alert(`Error: ${error.message}`)
                        }}
                    /> :
                        <div className="flex items-center justify-center gap-2">
                            <img className="h-16" src={image} />
                        </div>}
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default CreateUpdateCategories