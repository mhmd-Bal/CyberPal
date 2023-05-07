import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './index.css';
import { Button } from 'primereact/button';

function ConnectVpnTable() {
    const[userfiledb, setUserfiledb] = useState([])
    const[userfile, setUserfile] = useState([
        {
            "file_detail": "OpenVPN File Uploaded",
            "status": "0"
        },
        {
            "file_detail": "Connected",
            "status": "0"
        },
        {
            "file_detail": "Internal Virtual IP Address",
            "status": "0.0.0.0"
        }
    ]);

    return (
        <div className="card profile-content-table">
            <div className="card">
                <DataTable size='small' tableStyle={{ width: '30rem' }} value={userfile} >
                    <Column field="file_detail" header="OpenVPN Access Details" style={{ width: '50%' }}></Column>
                    <Column field="status" style={{ width: '3%' }}></Column>
                </DataTable>
            </div>
            <div className='profile-openvpn-buttons' >
                <Button label='Install Openvpn'  />
                <Button label='Openvpn Path'  />
                <Button label='Connect'  />
            </div>
        </div>
    )
}

export default ConnectVpnTable