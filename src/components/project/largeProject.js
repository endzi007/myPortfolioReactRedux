import React from 'react';
import { connect } from 'react-redux';
import { style, media } from 'typestyle';


const modalSize = style(
    media({minWidth: 768},{
        minWidth: "70vw",
    }),
    media({maxWidth: 768},{
        minWidth: "90vw",
    })
);

const LargeProject = ({
    tags, 
    title,
    id,
    url, 
    picture, 
    show,
    toggleModalShow
})=>{
    return (
        //dialogClassName used for custom modal sizing 

                    <div >
                        <h2>{title}</h2>
                        <div>
                            Some random text. Some random text. Some random text.Some random text.Some random text.Some random text.Some random text.
                            Some random text.Some random text.Some random text.Some random text.Some random text.Some random text.Some random text.
                            Some random text.Some random text.Some random text.Some random text.Some random text.Some random text.Some random text.
                            Some random text.Some random text.Some random text.Some random text.Some random text.Some random text.Some random text.
                            Some random text.Some random text.Some random text.Some random text.Some random text.Some random text.Some random text.
                        <div>
                            <img src={picture} alt={title} />
                            <p>{`Picture of ${title} project`}</p>
                        </div>
                            <div>
                                <h4>Technologies I have used to build this project</h4>
                            <ul >{tags.map((tag, i)=>{
                                return <li  key={`${id}_${tag}_${i}`}>{tag}</li>
                                })}
                            </ul>
                            </div>   
                        </div>
                                     
                    </div>
    )
}

function mapStateToProps(store){
    return {
        projects: store.projects
    }
}


export default connect (mapStateToProps)(LargeProject); 
