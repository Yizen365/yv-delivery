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
import { Form } from "./ui/form"
import { useForm } from "react-hook-form"
import SelectForm from "./SelectForm"
import { createUpdateProduct } from "@/services/productsCRUD"
import { toast } from "@/hooks/use-toast"

const CreateUpdateProducts = ({children, categories, product}) => {
    const form = useForm()

    const handleSubmit = async (formData) => {
        const res = await createUpdateProduct(formData, product?.id)

        if (res?.error) {
            toast({title: res.error})
        } else {
            toast({title: res?.message})
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
                        Create your products here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form action={handleSubmit}>
                        <FormInput label="Product Name" id="name" type="text" placeholder="Enter product name" className="h-10"/>
                        <FormInput label="Product Description" id="description" type="text" placeholder="Enter product description" className="h-14"/>
                        <FormInput label="Product Price" id="price" type="number" placeholder="Enter product price" className="h-10"/>
                        <SelectForm form={form} label="Select Category" id="category" lists={categories}/>
                        <DialogFooter>
                            <Button type="submit">Save changes</Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

export default CreateUpdateProducts