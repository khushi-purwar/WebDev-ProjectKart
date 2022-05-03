import React from 'react';
import { Card } from 'antd';

export const SDAleft = () => {
    return (
        <div>
        <Card  title={<h1 style={{ color: '#002766',textAlign:'center' }}>Syntra Digital Agency</h1>}>
            <Card type="inner">
                <p style={{ color: '#002766' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, architecto repellat. Quae doloribus dignissimos quasi unde illo dolore laboriosam perferendis nihil, assumenda nesciunt, consequuntur minima cumque non culpa hic atque nobis reiciendis possimus<br></br> quibusdam ipsa iusto at, autem temporibus quos. Officia expedita impedit, quaerat quis magni possimus sit dicta itaque!</p>
            </Card>
            <Card
                style={{ marginTop: 8 }}
                type="inner"
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#002766' }}>
                    <div><h2 style={{ color: '#002766' }}>Expert Team</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, voluptates?</p>
                    </div>
                    <div><h2 style={{ color: '#002766' }}>Business Analysis</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, illum.</p>
                    </div>
                </div>

            </Card>
            <Card
                style={{ marginTop: 8, backgroundColor: '#bae7ff' }}
                type="inner"
            >

                <p style={{ color: '#002766' }}>“We build thoughtful identities and experiences to elevate and empower organizations.</p>
            </Card>
        </Card>
        </div>
    )
}
