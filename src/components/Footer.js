import React from 'react'

export const Footer = () => {
    let style = {
        backgroundColor: 'teal',
        color: 'white'
    }
    return (
        <>
            <footer class="page-footer font-small pt-4 my-5" style={style}>
                <div class="container-fluid text-center text-md-left">
                    <div class="row">
                        <div class="col-md-6 mt-md-0 mt-3">
                            <h5 class="text-uppercase font-weight-bold">Footer text 1</h5>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sapiente sint, nulla, nihil
                                repudiandae commodi voluptatibus corrupti animi sequi aliquid magnam debitis, maxime quam recusandae
                                harum esse fugiat. Itaque, culpa?</p>
                        </div>
                        <hr class="clearfix w-100 d-md-none pb-3" />
                        <div class="col-md-6 mb-md-0 mb-3">
                            <h5 class="text-uppercase font-weight-bold">Footer text 2</h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Optio deserunt fuga perferendis modi earum
                                commodi aperiam temporibus quod nulla nesciunt aliquid debitis ullam omnis quos ipsam, aspernatur id
                                excepturi hic.</p>
                        </div>
                    </div>
                </div>

                <div class="footer-copyright text-center py-3">© 2020 Copyright : 
                    <a href="https://nikzy7.github.io/"> nikzy7.github.io/</a>
                </div>
            </footer>

        </>
    )
}

