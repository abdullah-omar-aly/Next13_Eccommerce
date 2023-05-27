import React from 'react'
import { useForm, useFieldArray } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { Select, Option , Input , Textarea} from "@material-tailwind/react";


type FormValues = {
    title: string
    description: string
    variants: { name: string, options: string[] }[]
    phNumbers: {
        number: string
    }[]
}
export default function ProductForm() {
    const form = useForm<FormValues>({
        defaultValues: {
            title: 'shirt',
            // variants: [
            //     {
            //         name: 'Color' , 
            //         options: ['Red' , 'Black']
            //     }
            // ],
            phNumbers: [{ number: '' }]
        }
    })
    const { register, control, handleSubmit } = form

    // const {fields , remove, append} = useFieldArray({
    //     name: 'phNumbers' ,
    //     control
    // })


    const onSubmit = (data: FormValues) => {
        console.log('Form submited', data)
    }

    return (
        <div className='bg-gray-100'>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div>
                    <div className='bg-white p-4 rounded-xl'>
                        <div className='mb-4'>
                        <Input label="Title" {...register('title', { required: 'product name is required' })}/>
                   
                        </div>
                        <div>
                        <Textarea label="Description"  {...register('description', { required: 'product name is required' })} />

                        </div>
                    </div>
                    <div>
                        <div className='bg-white p-4 rounded-xl'>
                            <Select label='Status' defaultValue="Acitve" >
                                <Option >Active</Option>
                                <Option>Archived</Option>
                                <Option>Draft</Option>
         
                            </Select>
                        </div>
                    </div>
                </div>

                {/* <div className='bg-white m-4 p-4 rounded-xl'>
                    <h3>Variants</h3>
                    <div>

                    </div>
                </div> */}

                {/* <div className='bg-white m-4 p-4 rounded-xl'>
                    <h3>dynamic field test</h3>
                    <div>
                        {
                            fields.map((field , index) => {
                                return (
                                    <div key={field.id}>
                                        <input type='text' {...register(`phNumbers.${index}.number` as const)} />
                                        {
                                            index > 0 && (
                                                <button type='button' onClick={() => remove(index)}>remove</button>
 
                                            )
                                        }
                                    </div>
                                )
                            })
                        }
                        <button type='button' onClick={() => append({number: ''})}>Add phone Number</button>
                    </div>
                 </div> */}


                <button type="submit">Save</button>
            </form>
            <DevTool control={control} />
        </div>
    )
}




