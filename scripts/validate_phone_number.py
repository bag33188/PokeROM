#!/usr/bin/python3

import re

def validate_phone_number(phone_number):
  phone_number_regexp = '^(?:([2-9]1{2})|(?:(\+?1\s*(?:[.-]\s*)?)?(?:\(?\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)?)\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(\x20+|#|x\.?|ext\.?|extension)\s*(\d+))?)$'
  phone_number_match = re.match(phone_number_regexp, phone_number, re.IGNORECASE)
  return False if phone_number_match == None else True

def main():
  while True:
    phone_number = input('Please enter a phone number: ')
    if phone_number == '' or len(phone_number) == 0:
      print('No phone number entered.')
      continue
    else:
      outcome = ' not ' if not validate_phone_number(phone_number) else ' '
      print(f'"{phone_number}" is{outcome}a valid phone number.')
      break

main()
