import React, { useEffect, useState } from 'react'

const Selector = () => {
    const dataBase = [{ name: 'India' }, { name: 'Pakistan' }, { name: 'nepal' }, { name: 'Bangladesh' }, { name: 'England' }];
    const [users, setUsers] = useState([])

    useEffect(() => {
        setUsers(dataBase)
    }, []);

    const handleChange = (e) => {
        const { name, checked } = e.target;
        if (name === "allSelect") {
            const tempUser = users.map(user => {
                return { ...user, isChecked: checked }
            })
            setUsers(tempUser)
        } else {
            const tempUser = users.map(user => user.name === name ? { ...user, isChecked: checked } : user);
            setUsers(tempUser)
            console.log(tempUser)
        }

    }

    return (
        <>
            <div className='container-fluid mt-5'>
                <div className='row justify-content-center'>
                    <div className='col-lg-4 col-md-6 col-6 '>
                        <div className='card p-4' style={{borderRadius : "20px", border : "1px solid #000"}}>
                            <form action="">
                                <h4><u><i>Select Users</i></u></h4>
                                <div className='form-group text-left my-0'>
                                    <input type="checkbox" className='' name='allSelect' checked={users.filter((user) => user?.isChecked !== true).length < 1} onChange={handleChange} />
                                    <label htmlFor="" className='pl-2 all_select'>All Select</label>
                                </div>
                                {
                                    users.map((user, ind) => (

                                        <div className='form-group text-left mt-0' key={ind}>
                                            <input type="checkbox" className='my-0' name={user.name} onChange={handleChange} checked={user?.isChecked || false} />
                                            <label htmlFor="" className='pl-2 my-0 py-0 select'>{user.name}</label>
                                        </div>

                                    ))
                                }
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Selector