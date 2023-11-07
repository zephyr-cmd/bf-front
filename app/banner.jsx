import React from 'react'

function banner() {
    return (
        <>
            <div className='bg-white '>

                <div className='flex   flex-col md:flex-row'>
                    <div className='basis-1/2 md:m-5 m-3 md:p-5     '>
                        <h1 className='font-bold font-serif mt-[10%] md:mt-[20%]'>Deliciously Affordable Bachelor's Food Shop Now for Easy Meals</h1>
                        <p className='text-[13px]'>Discover a world of convenience and flavor with our Bachelor's Food collection. Whether you're a busy student, a solo professional, or simply looking for quick and tasty meals, our e-commerce store offers a wide range of affordable, ready-to-cook options that will satisfy your cravings and save you time</p>
                        {/* <button className='bg-red-500 hover:bg-green-500 p-3 w-[100px] text-white'>Order Now</button> */}
                    </div>

                    <div className='flex gap-2 md:m-7 m-2'>

                        <img className='md:p-5' src="https://img.freepik.com/premium-photo/vegan-salad-fresh-vegetables-cabbage-romanesko_2829-18879.jpg?w=740" alt="" />

                    </div>


                </div>
            </div>
        </>
    )
}

export default banner