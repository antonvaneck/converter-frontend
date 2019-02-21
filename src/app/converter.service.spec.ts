import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ConverterService } from './converter.service';

describe('ConverterService', () => {
  let http;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    http = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: ConverterService = TestBed.get(ConverterService);
    console.log(service);
    expect(service).toBeTruthy();
  });

  it('convert http call', () => {
    const unitValue = {unit:"foot", value:1.};
    const service: ConverterService = TestBed.get(ConverterService);
    service.convert(unitValue)
    .subscribe(convertedUnitValue => {
      expect(convertedUnitValue.unit).toBe("asdf");
      expect(convertedUnitValue.value).toBe(0.3048);
    });
    const request = http.expectOne('${service.convertUrl}');

    expect(request.request.method).toBe('POST');
  });
});
