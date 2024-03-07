from django.shortcuts import render, redirect
from .forms import PatientForm
import csv
import os
import logging

# Configure logging
logging.basicConfig(level=logging.DEBUG)




def home(request):
    return render(request, 'home.html')

def save_to_csv(form_data):
    project_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    file_path = os.path.join(project_dir, 'myproject', 'patients.csv')

    try:
        with open(file_path, 'a', newline='') as csvfile:
            writer = csv.writer(csvfile)

            # Check if file exists before writing
            if not os.path.exists(file_path):
                writer.writerow([
                    'First Name',
                    'Last Name',
                    'Date of Birth',
                    'Gender',
                    'Phone Number',
                    'House Number',
                    'Street Name',
                    'City',
                    'Postcode',
                    'Country',
                    'NHS Number'
                ])

            writer.writerow([
                form_data['fname'],
                form_data['lname'],
                form_data['dob'],
                form_data['gender'],
                form_data['phone_number'],
                form_data['hnumber'],
                form_data['sname'],
                form_data['city'],
                form_data['postcode'],
                form_data['country'],
                form_data['nhsnumber']
            ])

        logging.info('Data saved to CSV file successfully.')
    except Exception as e:
        logging.error(f'Error occurred while saving data to CSV file: {e}')