const prepareDate = (value: string | number ) => {
    const newDate = new Date(value);
    return {
        day: newDate.getDay(),
        month: newDate.getMonth() + 1
    }
}

export default prepareDate;