type customerAdd = {
    name: string,
    mobile: string,
    email: string,
    gst: string,
    tax: string,
    due: string,
    state: string,
    city: string,
    pincode: string,
    address: string,

}
type contextData = {
    formData: customerAdd,
    setFormData: Dispatch<SetStateAction<customerAdd>>
}
type children = {
    children: React.ReactNode
}
type customerList = {
    cid: string,
    name: string,
    mobile: string,
    paid: number,
    salesdue: string | number,
    returndue: string | number,
    status: string,
    email: string

}

